const HomeAnnouncements = () => {
  const googleDocUrl =
    "https://docs.google.com/document/d/e/2PACX-1vTRJn6RGxzJMgk_QDidSwXAvTlYrPOQmRNx_EmNdlRiTWFhfPSaEAB1BzCMkMH7XKui8ZW_LC1pg2RN/pub?embedded=true";

  return (
    <>
      <div className="w-full bg-white h-[400px] px-2 dark:bg-neutral-9 rounded-xl flex flex-col gap-7 border-2 border-blue-9 dark:border-yellow-6">
        <iframe title="Google Doc Embed" className="h-full" src={googleDocUrl} />
      </div>
    </>
  );
};
export default HomeAnnouncements;
