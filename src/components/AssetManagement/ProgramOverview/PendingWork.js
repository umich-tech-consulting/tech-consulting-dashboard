const PendingWork = () => {
  return (
    <>
      <div className="mt-8 mb-2 title-medium text-neutral-9 dark:text-neutral-2">Pending Work</div>
      <div className="w-full flex gap-8 flex-wrap">
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">
              Pending Request Tickets
            </div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">12</div>
          </div>
        </div>
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">
              Pending Customer Check Outs
            </div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">20</div>
          </div>
        </div>
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">
              Pending Customer Returns
            </div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">20</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PendingWork;
