import React, { useState } from "react";
import { submitUrl } from "@/lib/api";
import LoadingSpinner from "./LoadingSpinner";
import { useToast } from "@/components/ui/use-toast";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await submitUrl(url);
      toast({
        title: "Success",
        description: "Property data has been extracted and processed successfully!",
      });
      setUrl("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process URL. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Jina.ai URL"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all duration-200"
          disabled={isLoading}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="w-5 h-5" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Extract Data</span>
        )}
      </button>
    </form>
  );
};

export default UrlForm;