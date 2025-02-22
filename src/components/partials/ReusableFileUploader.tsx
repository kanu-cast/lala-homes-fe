"use client";

import React, { useState } from "react";
import { Box, Button, Typography, Alert } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";

interface FileUploadProps {
  label: string;
  acceptedFormats?: string[];
  onFileSelect: (file: File | null) => void; // Callback to pass file to parent
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  acceptedFormats = ["image/png", "image/jpeg", "image/webp"],
  onFileSelect,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && acceptedFormats.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setUploadStatus("Uploaded successfully!");
      onFileSelect(uploadedFile); // Send file to parent

      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      localStorage.setItem("image", previewUrl as string);
      reader.readAsDataURL(uploadedFile);
    } else {
      setUploadStatus("Invalid file format");
      onFileSelect(null); // Reset selection
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setUploadStatus(null);
    onFileSelect(null); // Reset in parent
  };

  return (
    <Box sx={{ margin: "auto", textAlign: "center" }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {label}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 150,
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          cursor: "pointer",
          border: "1px dashed #bbb",
          transition: "all 0.3s ease",
          "&:hover": { backgroundColor: "#f1f1f1" },
          overflow: "hidden",
          position: "relative",
        }}
        onClick={() =>
          document
            .getElementById(label.replace(/\s+/g, "-") + "-upload")
            ?.click()
        }
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={`${label} Preview`}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            Click to upload {label.toLowerCase()}
          </Typography>
        )}
      </Box>

      <input
        id={`${label.replace(/\s+/g, "-")}-upload`}
        type="file"
        accept={acceptedFormats.join(", ")}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {file && (
        <Button
          startIcon={<FaTrashAlt />}
          onClick={handleRemoveFile}
          variant="outlined"
          color="error"
          size="small"
          sx={{ mt: 1 }}
        >
          Remove
        </Button>
      )}

      {uploadStatus && (
        <Alert
          severity={uploadStatus.includes("success") ? "success" : "error"}
          sx={{ mt: 1 }}
        >
          {uploadStatus}
        </Alert>
      )}
    </Box>
  );
};

export default FileUpload;
