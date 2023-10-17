const PendingWork = () => {
  return (
    <>
      <div className="mt-8 mb-2 title-medium text-neutral-9">Pending Work</div>
      <div className="w-full flex gap-8">
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center shadow-light">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8">
              Pending Request Tickets
            </div>
            <div className="display-small">12</div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center shadow-light">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8">
              Pending Customer Pickups
            </div>
            <div className="display-small">20</div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center shadow-light">
          <div className="flex flex-col gap-3">
            <div className="title-medium text-neutral-8">
              Pending Customer Dropoffs
            </div>
            <div className="display-small">20</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PendingWork;
