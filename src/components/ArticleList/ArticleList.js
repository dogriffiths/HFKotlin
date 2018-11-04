import React from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

import './ArticleList.css'

const ArticleList = (props) => {
    return <div className='articles'>
        {props.articles.map(article => <ArticlePreview article={article}/>)}
    </div>
};

export default ArticleList;