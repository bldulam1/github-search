import { useState } from "react";

const RepositoryListItem = (props: { value: any }) => {
  const url = "https://github.com/" + props.value.full_name;

  return (
    <li className="list-item border-bottom">
      <div className="list-item-bullet">
        <svg height="18" width="18" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M12.75,13.5C15.5,13.5 16.24,11.47 16.43,10.4C17.34,10.11 18,9.26 18,8.25C18,7 17,6 15.75,6C14.5,6 13.5,7 13.5,8.25C13.5,9.19 14.07,10 14.89,10.33C14.67,11 14,12 12,12C10.62,12 9.66,12.35 9,12.84V8.87C9.87,8.56 10.5,7.73 10.5,6.75C10.5,5.5 9.5,4.5 8.25,4.5C7,4.5 6,5.5 6,6.75C6,7.73 6.63,8.56 7.5,8.87V15.13C6.63,15.44 6,16.27 6,17.25C6,18.5 7,19.5 8.25,19.5C9.5,19.5 10.5,18.5 10.5,17.25C10.5,16.32 9.94,15.5 9.13,15.18C9.41,14.5 10.23,13.5 12.75,13.5M8.25,16.5A0.75,0.75 0 0,1 9,17.25A0.75,0.75 0 0,1 8.25,18A0.75,0.75 0 0,1 7.5,17.25A0.75,0.75 0 0,1 8.25,16.5M8.25,6A0.75,0.75 0 0,1 9,6.75A0.75,0.75 0 0,1 8.25,7.5A0.75,0.75 0 0,1 7.5,6.75A0.75,0.75 0 0,1 8.25,6M15.75,7.5A0.75,0.75 0 0,1 16.5,8.25A0.75,0.75 0 0,1 15.75,9A0.75,0.75 0 0,1 15,8.25A0.75,0.75 0 0,1 15.75,7.5Z"
          />
        </svg>
      </div>
      <div className="list-item-main">
        <div className="flex">
          <div className="f4 text-normal">
            <a className="v-align-middle" href={url}>
              {props.value.full_name}
            </a>
          </div>
        </div>

        <div className="description-container">
          <p className="description">{props.value.description}</p>
        </div>

        <div className="tag-container gap-1 mb-1">
          {props.value.topics.map((topic: string) => (
            <a
              href={"https://github.com/topics/" + topic}
              key={topic}
              className="topic"
            >
              {topic}
            </a>
          ))}
        </div>

        <div className="tag-container gap-2">
          <div>
            <a href={url + "/stargazers"}>
              <svg
                aria-label="star"
                role="img"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                className="octicon"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              {props.value.stargazers_count.toLocaleString()}
            </a>
          </div>

          <div>{props.value.language}</div>

          {props.value.license?.name && <div>{props.value.license.name}</div>}

          <div>Updated {formatDate(props.value.updated_at)}</div>
        </div>
      </div>
    </li>
  );
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export default RepositoryListItem;
