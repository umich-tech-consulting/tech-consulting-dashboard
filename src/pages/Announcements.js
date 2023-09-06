import { Helmet } from "react-helmet";

const Announcements = () => {
  const googleDocUrl = "https://docs.google.com/document/d/e/2PACX-1vRteqKEYcjVdCR7zlhwXHLs1iL_sxEqjp7luzWFDbVhpM1lRjVhgEUMy04cTVbCp4QW5k855rAgEFXn/pub?embedded=true";

  return (
    <>
      <Helmet>
        <title>Announcements</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in">
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
