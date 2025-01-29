import UrlForm from "@/components/UrlForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Property Data Extraction
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Submit your Jina.ai URL to extract and process property data efficiently and accurately.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto">
          <UrlForm />
        </div>

        <footer className="text-sm text-gray-500">
          Powered by advanced data extraction technology
        </footer>
      </div>
    </div>
  );
};

export default Index;