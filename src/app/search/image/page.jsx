import ImageSearchResults from "@/app/components/ImageSearchResults";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import Suspense

export const ImageSearchPage = ({ searchParams }) => {
  const startIndex = searchParams.start || "1";

  // Move useSearchParams inside the Suspense boundary
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageSearchResultsWrapper
        searchParams={searchParams}
        startIndex={startIndex}
      />
    </Suspense>
  );
};

const ImageSearchResultsWrapper = ({ searchParams, startIndex }) => {
  const { searchTerm } = useSearchParams();

  const fetchImageResults = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`
    );
    if (!response.ok) throw new Error("Something went wrong");
    const data = await response.json();
    return data.items;
  };

  const { data: results, error } = useSWR(
    ["imageSearch", searchTerm, startIndex],
    fetchImageResults
  );

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          Error fetching results for {searchTerm}
        </h1>
        <p className="text-lg">
          Please try again later or check your internet connection{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  if (!results) {
    return <div>Loading...</div>;
  }

  return <ImageSearchResults results={results} />;
};

export default ImageSearchPage;
