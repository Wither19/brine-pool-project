function ProjectArticle(props: {
	children: any;
	header: string;
	center?: boolean;
}) {
	return (
		<>
			<div className="ArticleSection">
				<h3 className={`ArticleHeader ${props.center ? "center" : ""}`}>
					{props.header}
				</h3>
				<p>{props.children}</p>
			</div>
		</>
	);
}

export default ProjectArticle;
