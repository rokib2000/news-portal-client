import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, total_view, author, image_url, details } = news;

  return (
    <Card className="mt-5">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Body className="d-flex align-items-center">
        <img src={author.img} style={{ width: "50px" }} alt="..." class="rounded-circle me-3" />
        <p className="me-4">Author Name: {author.name}</p>
        <p className="me-4">Published: {author.published_date}</p>
        <p className="me-4">Total View: {total_view}</p>
      </Card.Body>
    </Card>
  );
};

export default NewsSummaryCard;
