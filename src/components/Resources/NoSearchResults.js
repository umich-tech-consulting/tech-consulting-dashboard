import search_corgi from "../../icons/resources/search_corgi.png"
const NoSearchResults = () => {
    return (
      <>
        <div className="flex flex-col gap-4 p-2 rounded-md text-center items-center">
            <div className="title-large text-neutral-9 dark:text-neutral-1">No search results</div>
            <img className="w-[150px] h-[150px]" src={search_corgi} alt='Search Corgi' />
            <div className="body-medium text-neutral-8 dark:text-neutral-2">Search will only look for words that exactly match the Title and/or Description of a link</div>
        </div>
      </>
    );
  };
export default NoSearchResults;