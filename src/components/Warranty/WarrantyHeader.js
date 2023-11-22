const WarrantyHeader = () => {
  return (
    <>
      <div className="mt-8 flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
          >
            <path
              stroke="#0D57AA"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M32 7.238a31.89 31.89 0 0 1-22.405 8.763A31.974 31.974 0 0 0 8 25.998c0 14.912 10.197 27.44 24 30.995C45.803 53.44 56 40.913 56 26c0-3.493-.56-6.856-1.595-10.003H54a31.88 31.88 0 0 1-22-8.76Z"
            />
          </svg>
          <div className="headline-large text-neutral-9 text-center">
            Warranty Check
          </div>
        </div>
        <div className="body-medium text-neutral-7 text-center max-w-3xl">
          Note: This page only checks the warranty of University and Non
          University laptops. Other devices are not supported.
        </div>
      </div>
    </>
  );
};
export default WarrantyHeader;
