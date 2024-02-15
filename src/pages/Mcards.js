import { Helmet } from "react-helmet";

const Announcements = () => {
  const googleDocUrl = "https://docs.google.com/presentation/d/e/2PACX-1vQcjbHcRQhTNcALgvYk4N3lCgmEIwyY6ahU6jGVkT3PZumhIQLykIWY94XRCnT5Ka-NH2-gP0BR1TKz/embed?";

  return (
    <>
      <Helmet>
        <title>Mcards</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in announcement-bg">
        <div className="headline-large text-center dark:text-neutral-1">Mcards</div>
        <div className="flex justify-center h-full w-full rounded-xl overflow-y-auto mt-6">
          <iframe
            title="Google Doc Embed"
            src={googleDocUrl}
            width="100%"
            allowfullscreen="true"
            mozallowfullscreen="true"
            frameborder="0" 
            webkitallowfullscreen="true"
          />
        </div>
      </div>
    </>
  );
};

export default Announcements;
