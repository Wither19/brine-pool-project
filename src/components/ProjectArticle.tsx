type ProjectArticleProps = {
  children: any;
  header: string;
  center?: boolean;
};

function ProjectArticle({ children, header, center }: ProjectArticleProps) {
  return (
    <>
      <div className="ArticleSection">
        <h3 className={`ArticleHeader ${center ? "center" : ""}`}>{header}</h3>
        <p>{children}</p>
      </div>
    </>
  );
}

export default ProjectArticle;
