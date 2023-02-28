import React from "react";
import { useParams, Params } from "react-router-dom";

type Props = {};

const RecipeDetailPage = () => {
  const { id } = useParams<Params>();

  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-screen-lg bg-green">
        <h1>title</h1>
        <div>
          <img src="" alt="" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <div>Views: </div>
          <div>Type: </div>
          <div>Difficulty: </div>
          <div>Time: </div>
        </div>
        <p>Description</p>
        <p>Lorem Description</p>
        <div>
          <h1>Comments</h1>
          <div>
            <img src="" alt="comment-guy" />
            <p>commentario</p>
          </div>
          <input type="text" placeholder="write here..." />
        </div>
        Recipe Detail Page for recipe {id}
      </div>
    </section>
  );
};

export default RecipeDetailPage;
