import React, { useRef, useState, useEffect } from "react";
import FundiLogo from "../../assets/fund-logo.png";
import emailjs from "@emailjs/browser";
import html2pdf from "html2pdf.js";
import SignatureCanvas from "react-signature-canvas";

const LetterOfIntent = () => {
    const [organizationName, setOrganizationName] = useState("");
    const [estimatedSupporters, setEstimatedSupporters] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactPosition, setContactPosition] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [signature, setSignature] = useState(null);
    const [uploadedSignature, setUploadedSignature] = useState(null);
    const sectionRef = useRef(null);
    const sigCanvas = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRefs = {
        organizationName: useRef(null),
        estimatedSupporters: useRef(null),
        contactName: useRef(null),
        contactPosition: useRef(null),
        contactEmail: useRef(null),
        contactPhone: useRef(null),
    };

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
    }, []);

    const validateForm = () => {
        let isValid = true;
        let errorText = "Please enter";
        // Validate organization name
        if (!organizationName) {
            isValid = false;
            errorText += " organization name,";
            inputRefs.organizationName.current.classList.add("border-b-red-500");
        } else {
            inputRefs.organizationName.current.classList.remove("border-b-red-500");
        }

        // Validate estimated supporters
        if (!estimatedSupporters) {
            isValid = false;
            errorText += " estimated supporters,";
            inputRefs.estimatedSupporters.current.classList.add("border-b-red-500");
        } else {
            inputRefs.estimatedSupporters.current.classList.remove("border-b-red-500");
        }

        // Validate contact name
        if (!contactName) {
            isValid = false;
            errorText += " contact name,";
            inputRefs.contactName.current.classList.add("border-b-red-500");
        } else {
            inputRefs.contactName.current.classList.remove("border-b-red-500");
        }

        // Validate contact position
        if (!contactPosition) {
            isValid = false;
            errorText += " contact position,";
            inputRefs.contactPosition.current.classList.add("border-b-red-500");
        } else {
            inputRefs.contactPosition.current.classList.remove("border-b-red-500");
        }

        // Validate contact email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!contactEmail || !emailPattern.test(contactEmail)) {
            isValid = false;
            errorText += " valid email address,";
            inputRefs.contactEmail.current.classList.add("border-b-red-500");
        } else {
            inputRefs.contactEmail.current.classList.remove("border-b-red-500");
        }

        // Validate contact phone
        // const phonePattern = /^[0-9]{10}$/;
        if (!contactPhone) {
            isValid = false;
            errorText += " phone number,";
            inputRefs.contactPhone.current.classList.add("border-b-red-500");
        } else {
            inputRefs.contactPhone.current.classList.remove("border-b-red-500");
        }


        // Validate signature
        if (!checkSignature()) {
            if (isValid) {
                errorText = "Please";
            }
            errorText += " draw or upload a signature,";
            isValid = false;
        }

        if (isValid === false) {
            alert(errorText.slice(0, -1) + '.');
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        setLoading(true);
        const signatureDrawn = await handleDrawSignature();
        const pdfBase64 = await generatePDF();
        const pdfData = pdfBase64.split(",")[1];
    
        try {
            // Convert Base64 to Blob
            const formData = new FormData();
            const file = new Blob([Uint8Array.from(atob(pdfData), c => c.charCodeAt(0))], { type: "application/pdf" });
            formData.append("file", file, "document.pdf");
    
            // Upload PDF to PHP
            const response = await fetch("http://localhost/benidoolan/fundi-source/server/upload.php", {
                method: "POST",
                body: formData,
            });
    
            const result = await response.json();
    
            if (result.success) {
                console.log("File uploaded successfully:", result.fileUrl);
                sendEmail(result.fileUrl, signatureDrawn); // Now send only the file URL
            } else {
                throw new Error("File upload failed");
            }
        } catch (error) {
            console.error("Error uploading PDF:", error);
            alert("There was an error uploading the PDF. Please try again.");
            setLoading(false);
        }
    };
    



    const generatePDF = async () => {
        const element = sectionRef.current;
        const opt = {
            margin: 0.5,
            filename: "letter_of_intent.pdf",
            image: { type: "jpeg", quality: 0.9 }, // Lower quality for smaller file size
            html2canvas: { scale: 1.5 }, // Lower scaling for smaller file size
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        const pdfContent = element.cloneNode(true);
        const inputs = pdfContent.querySelectorAll("input");

        inputs.forEach((input) => {
            const span = document.createElement("span");
            span.textContent = input.value;
            input.parentNode.replaceChild(span, input);
        });

        const signatureContainer = pdfContent.querySelector(".signature-canvas");
        if (signatureContainer && isSignatureDrawn()) {
            const img = document.createElement("img");
            if (sigCanvas?.current) {
                // Use drawn signature base64 data
                img.src = sigCanvas.current.toDataURL();
            }
            img.style.maxWidth = "250px";
            img.style.borderBottom = "1px solid #020617";
            signatureContainer.parentNode.replaceChild(img, signatureContainer);
        }

        const images = pdfContent.querySelectorAll("img");
        images.forEach((img) => {
            const base64Data = img.src;
            if (base64Data && base64Data.startsWith("data:image")) {
                img.src = base64Data;
            }
        });

        const style = document.createElement("style");
        style.innerHTML = `
        #letter-of-intent {
            padding: 0 !important;
            background: none !important;
        }
        #singnature-control {
            display: none;
        }
        input {
            display: none;
        }
        button {
            display: none !important;
        }
        .pdf-content {
            padding: 5px;
            margin: 0;
        }
    `;
        pdfContent.appendChild(style);

        // Use html2pdf to generate the PDF
        await html2pdf().from(pdfContent).set(opt).save();

        // Return Base64 string for email attachment
        return await html2pdf().from(pdfContent).set(opt).outputPdf("datauristring");
    };

    const sendEmail = (fileUrl, signatureDrawn) => {
        const templateParams = {
            organization_name: organizationName,
            estimated_supporters: estimatedSupporters,
            contact_name: contactName,
            contact_email: contactEmail,
            contact_phone: contactPhone,
            signature: signatureDrawn || uploadedSignature,
            file_url: fileUrl // Send only the file URL
        };
    
        emailjs
            .send(
                process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
                process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
                templateParams
            )
            .then(
                (response) => {
                    console.log("Email sent successfully:", response);
                    setLoading(false);
                    setShowModal(true);
                },
                (error) => {
                    console.error("Error sending email:", error);
                    alert("There was an error sending the email. Please try again.");
                    setLoading(false);
                }
            );
    };
    

    const handleSignatureUpload = (e) => {
        if (isSignatureDrawn()) {
            sigCanvas.current.clear();
        }
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedSignature(reader.result);
                setSignature(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrawSignature = async () => {
        if (isSignatureDrawn()) {
            const dataUrl = sigCanvas.current.toDataURL();
            setSignature(dataUrl);
            setUploadedSignature(null);
            return dataUrl;
        }
        return null;
    };

    const clearSignature = () => {
        if (isSignatureDrawn() || signature) {
            sigCanvas.current.clear();
            setSignature(null);
        } else {
            setUploadedSignature(null);
            const input = document.getElementById("signature-upload");
            input.value = "";
        }
    };

    const isSignatureDrawn = () => {
        return sigCanvas && sigCanvas?.current && !sigCanvas.current.isEmpty();
    };
    const checkSignature = () => {
        return isSignatureDrawn() || uploadedSignature || signature;
    };

    const closeModal = () => {
        setShowModal(false);
        setSignature(null);
    };

    return (
        <>

            <section
                id="letter-of-intent"
                ref={sectionRef}
                className="flex flex-col mx-auto pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] bg-[#f8f5f2] px-8"
            >
                <div className="text-[#1c1d24] max-w-[990px] gap-y-4 flex flex-col mx-auto">
                    <img src={FundiLogo} alt="FundiLogo" className="ml-auto h-10" />
                    <h6 className="text-[#1c1d24] font-bold text-[24px] text-start float-start font-axiforma-r">
                        Expression of Interest
                    </h6>
                    <p>
                        Dear Fundi team, <br /><br />
                        On behalf of{" "}
                        <input
                            ref={inputRefs.organizationName}
                            className="bg-transparent border-b border-slate-950 w-[20rem] text-center"
                            type="text"
                            placeholder="organisation name"
                            value={organizationName}
                            onChange={(e) => setOrganizationName(e.target.value)}
                        />
                        , I am pleased to express our interest. We are excited about the potential to revolutionise our
                        fundraising efforts through this collaboration.
                    </p>
                    <div>
                        <h6 className="text-[18px] font-bold mb-4">Organisation Information</h6>
                        <div className="mb-2">
                            <label htmlFor="estimatedSupporters">1. Estimated number of supporters: </label>
                            <input
                                ref={inputRefs.estimatedSupporters}
                                id="estimatedSupporters"
                                className="bg-transparent border-b border-slate-950 w-auto min-w-[150px]"
                                type="text"
                                value={estimatedSupporters}
                                onChange={(e) => setEstimatedSupporters(e.target.value)}
                            />{" "}
                            <br />
                            <small>
                                (Include members, families, volunteers, event participants, young adults, online
                                supporters,
                                sponsors, staff, and others – insert an estimate)
                            </small>
                        </div>
                        <h6>2. Primary contact information:</h6>
                        <div className="mb-2 ml-5">
                            <label htmlFor="name">◦ Name: </label>
                            <input
                                ref={inputRefs.contactName}
                                id="name"
                                className="bg-transparent border-b border-slate-950 w-[19.5rem] min-w-[150px]"
                                type="text"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 ml-5">
                            <label htmlFor="position">◦ Position: </label>
                            <input
                                ref={inputRefs.contactPosition}
                                id="position"
                                className="bg-transparent border-b border-slate-950 w-[18.5rem] min-w-[150px]"
                                type="text"
                                value={contactPosition}
                                onChange={(e) => setContactPosition(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 ml-5">
                            <label htmlFor="sender-email">◦ Email address: </label>
                            <input
                                ref={inputRefs.contactEmail}
                                id="sender-email"
                                className="bg-transparent border-b border-slate-950 w-[16rem] min-w-[150px]"
                                type="email"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 ml-5">
                            <label htmlFor="sender-phone-no">◦ Phone number: </label>
                            <input
                                ref={inputRefs.contactPhone}
                                id="sender-phone-no"
                                className="bg-transparent border-b border-slate-950 w-[15.5rem] min-w-[150px]"
                                type="text"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <p>
                        We understand that this Expression of Interest is non-binding and solely confirms our interest in
                        joining
                        Fundi’s platform.
                    </p>
                    <div>
                        <div className="mb-2">
                            Sincerely,
                        </div>
                        <div className="mt-2">
                            {uploadedSignature ? (
                                <img src={uploadedSignature} alt="Uploaded Signature"
                                    className="border border-x-transparent border-t-transparent border-b-slate-950"
                                    style={{ maxWidth: '250px' }} />
                            ) : signature ? (
                                <img src={signature} alt="Drawn Signature"
                                    className="border border-x-transparent border-t-transparent border-b-slate-950"
                                    style={{ maxWidth: '250px' }} />
                            ) : ''
                            }
                            <div
                                className={(signature || uploadedSignature ? 'hidden ' : '') + " inline-block border border-x-transparent border-t-transparent border-b-slate-950 hover:border-slate-950"}>
                                <SignatureCanvas
                                    ref={sigCanvas}
                                    penColor="black"
                                    canvasProps={{
                                        width: 250,
                                        height: 100,
                                        className: "signature-canvas"
                                    }}
                                />
                            </div>
                            <div className="w-[250px] mt-2 flex justify-between" id="singnature-control">
                                <small>
                                    Draw your signature or <label htmlFor="signature-upload" role="button"
                                        className="cursor-pointer underline text-[#007bff]">upload</label>
                                </small>
                                <input
                                    id="signature-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleSignatureUpload}
                                    className="hidden"
                                />
                                <small role="button" onClick={clearSignature} className="text-[#ff5a65]">
                                    Clear
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <button
                            className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-full md:w-fit justify-center"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out opacity-100">
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 transition-transform duration-500 ease-in-out transform translate-y-0">
                            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
                            <p className="text-center">
                                Thank you for submitting your Letter of Intent and taking the first step toward
                                transforming
                                your organisation's fundraising efforts.
                            </p>
                            <p className="text-center my-4">Stay tuned – we’ll be in touch soon with updates and next
                                steps.</p>
                            <p className="text-center font-bold">The Fundi Team</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center justify-center"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {loading && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-4 border-t-4 border-t-red-500 rounded-full animate-spin"></div>
                </div>
            )}
        </>
    );
};

export default LetterOfIntent;
