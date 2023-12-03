function PageWrapper(props: { children: React.ReactNode }) {
    return <div className="page-wrapper">{props.children}</div>;
  }
  
  export default PageWrapper;