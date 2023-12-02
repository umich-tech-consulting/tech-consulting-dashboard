import { Lightbulb, ExternalLink } from "../../icons/warranty/WarrantySvgs";
const WarrantyRelevantLinks = () => {
  return (
    <>
      <div className="label-medium text-neutral-9 dark:text-neutral-1 max-w-3xl w-full flex gap-2 items-center">
        <Lightbulb />
        <a href="https://www.google.com/" target="blank" rel="noopener noreferrer" className="flex gap-1 p-2 rounded-[6px] w-fit bg-white dark:bg-neutral-9 shadow-light dark:shadow-dark hover:bg-blue-0 dark:hover:bg-neutral-8 focus:bg-blue-1 hover:shadow-blue dark:hover:shadow-yellow transition ease-out duration-[400ms]">
          <div>Microsoft Warranty Site</div>
          <ExternalLink />
        </a>
        <a href="https://www.google.com/" target="blank" rel="noopener noreferrer" className="flex gap-1 p-2 rounded-[6px] w-fit bg-white dark:bg-neutral-9 shadow-light dark:shadow-dark hover:bg-blue-0 dark:hover:bg-neutral-8 focus:bg-blue-1 hover:shadow-blue dark:hover:shadow-yellow transition ease-out duration-[400ms]">
          <div>Safeware Warranty Site</div>
          <ExternalLink />
        </a>
      </div>
    </>
  );
};

export default WarrantyRelevantLinks;
