import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export const ImageSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";

  try {
    // Simulating a delay with setTimeout for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    const results = data.items;

    if (!results || results.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">
            No results found for {searchParams.searchTerm}
          </h1>
          <p className="text-lg">
            Try searching the web or images for something else{" "}
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </p>
        </div>
      );
    }

    return <ImageSearchResults results={results} />;
  } catch (error) {
    console.error("Error fetching image search results:", error);
    // Handle error state if needed
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          Something went wrong while fetching results
        </h1>
        <p className="text-lg">
          Please try again later or go back{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
};

export default ImageSearchPage;
