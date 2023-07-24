import { Helmet } from "react-helmet";

const Announcements = () => {
  const googleDocUrl = "https://docs.google.com/document/d/e/2PACX-1vTRJn6RGxzJMgk_QDidSwXAvTlYrPOQmRNx_EmNdlRiTWFhfPSaEAB1BzCMkMH7XKui8ZW_LC1pg2RN/pub?embedded=true";
//   const googleDocUrl = "https://docs.google.com/document/d/17ceEJafaJGeUuE6_80vNzljyxHxb85WeLege8BwM-AQ/preview";

  return (
    <>
      <Helmet>
        <title>Announcements</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="headline-large text-center">Announcements</div>
        <div className="flex justify-center h-full w-full rounded-xl overflow-y-auto mt-6">
          <iframe
            title="Google Doc Embed"
            src={googleDocUrl}
            width="816px"
          />
        </div>
      </div>
    </>
  );
};

export default Announcements;
