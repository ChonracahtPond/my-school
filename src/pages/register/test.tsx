import React, { useRef, useState } from 'react';

const UploadPage = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleUpload = async () => {
        if (fileInputRef.current) {
            const file = fileInputRef.current.files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                try {
                    const response = await fetch('https://upload-image.me-prompt-technology.com/', {
                        method: 'POST',
                        body: formData,
                    });

                    const responseData = await response.json();
                    console.log(responseData);

                    // สร้าง URL ของรูปภาพจาก responseData
                    if (responseData.result?.variants[0]) {
                        setImageUrl(responseData.result.variants[11]);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };

    return (
        <div>
            <input ref={fileInputRef} type="file" name="image" />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl && <img src={imageUrl} alt="Uploaded" />}
        </div>
    );
};

export default UploadPage;
