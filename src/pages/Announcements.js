import { Helmet } from "react-helmet";

const Announcements = () => {
  const googleDocUrl = "https://docs.google.com/document/d/17ceEJafaJGeUuE6_80vNzljyxHxb85WeLege8BwM-AQ/preview";

  return (
    <>
      <Helmet>
        <title>Announcements</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="headline-small">Announcements</div>
        <div className="w-full h-full bg-white rounded-xl overflow-y-auto mt-6">
          <iframe
            title="Google Doc Embed"
            src={googleDocUrl}
            width="100%"
            height="100%" // Adjust the height as needed

          />
        </div>
      </div>
    </>
  );
};

export default Announcements;
