"use client";

import { useState, useEffect } from "react";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<any[]>([]);
  const [copied, setCopied] = useState<string | boolean>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  const getSummary = async (articleUrl: string) => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${articleUrl}&lang=it`;
    try {
      const response = await fetch(url, options);
      const result: { summary: string } = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      setIsError(true);
      console.error(error);
      return error;
    }
  };

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = localStorage.getItem("articles");

    if (articlesFromLocalStorage) {
      setAllArticles(JSON.parse(articlesFromLocalStorage));
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) {
      setArticle(existingArticle);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch the summary
      const data: any = await getSummary(article.url);
      console.log("Fetched Data:", data);

      // Check if the data contains a summary
      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const updatedAllArticles = [newArticle, ...allArticles];

        // Update state and local storage
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);
        localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      }
    } catch (error) {
      console.error("Failed to fetch summary:", error);
    } finally {
      // Always stop loading indicator
      setIsLoading(false);
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl: any) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src='/assets/link.svg'
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className='text-black block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type='submit'
            className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer'
            >
              <div
                className='w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer'
                onClick={() => handleCopy(item.url)}
              >
                <img
                  src={
                    copied === item.url
                      ? "/assets/tick.svg"
                      : "/assets/copy.svg"
                  }
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Result */}
      <div className='my-10 max-w-full flex justify-center items-center'>
        {isLoading ? (
          <img
            src='/assets/loader.svg'
            alt='loader'
            className='w-20 h-20 object-contain'
          />
        ) : isError ? (
          <p className='font-inter font-bold text-black text-center'>
            A causa di eccessive richieste il sistema non è momentaneamente
            disponibile...
            <br />
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Riassunto{" "}
                <span className='font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                  AI
                </span>
              </h2>
              <div className='rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
