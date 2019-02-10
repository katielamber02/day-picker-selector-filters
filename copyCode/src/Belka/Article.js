import React from "react";
import CommentList from "./CommentList";
import { CSSTransitionGroup } from "react-transition-group";
import CommentForm from "./CommentForm";

function Article(props) {
  //console.log(props);
  return (
    <>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <h1>{props.article.title}</h1>
        <button
          onClick={props.toggleOpen}
          className="button"
          style={{ fontSize: "2em" }}
        >
          {props.opened ? "close article text" : "open article text"}
        </button>

        {props.opened ? (
          <div>
            <section>{props.article.text}</section>

            <CommentList comments={props.article.comments} />
            <CommentForm />
          </div>
        ) : null}
      </CSSTransitionGroup>
    </>
  );
}
export default Article;
