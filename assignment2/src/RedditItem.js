import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const RedditSearch = styled.section`
	&:hover {
		color:orangered;
		
		input[type="text"]{
			color:orangered;
			text-decoration: underline;
			text-decoration-style: dotted;
		}
  }
`;

const RedditItemList = styled.div`
  /* all declarations will be prefixed */
  padding: 2em 1em;
  background: papayawhip;
  border:1px solid #eee;
  max-width:240px;
  margin: 1em;
  img{
  	opacity: .75;
  }

  /* pseudo selectors work as well */
  &:hover {
    background: #ffefd530;
    border:1px solid orangered;
    opacity: 1;
    
    a{
    	color:orangered;
    }
    
    img{
		opacity: 1;
	}
	
    h3 > a{
    	color: red;
    }
    
    p{
        color: coral;
	}
  }

  /* media queries are no problem */
  @media (max-width: 600px) {
    background: tomato;

    /* nested rules work as expected */
    &:hover {
      background: yellow;
    }
  }

  > p {
    /* descendant-selectors work as well, but are more of an escape hatch */
    // text-decoration: underline;
  }

  /* Contextual selectors work as well */
  html.test & {
    display: none;
  }
`;

const RedditItem = () => {
  const [search, setSearch] = useState('awww');
  const [data, setData] = useState(null);

  const getAPI = () => {
    fetch('https://www.reddit.com/r/' + search + '/new.json?sort=new')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data.children);
        setData({ data: responseJson, items: responseJson.data.children });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  useEffect(() => {
    getAPI();
  }, [search])
  return (
    <div>
      <div>
        <input className='border-2 m-3 p-3' value={search} onChange={handleChange} />
      </div>
      <div>
        <section className="reddit-list flex flex-wrap justify-center items-center">
          {
            data?.items &&
            data?.items.map(item => (
              <RedditItemList key={item.data.id}>
                <p><a href={`https://www.reddit.com/${item.data.subreddit_name_prefixed}`} target="_blank" rel="noopener">{item.data.subreddit_name_prefixed}</a></p>

                <p><a href={`https://www.reddit.com/u/${item.data.author}`} target="_blank" rel="noopener">u/{item.data.author}</a></p>

                {
                  item.data.thumbnail &&
                  <a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener"><img src={item.data.thumbnail} alt="" /></a>
                }

                {
                  item.data.url === '' &&
                  <a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener"><img src={item.data.url} alt="" /></a>
                }

                <h3><a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener">{item.data.title}</a></h3>

                <p>Comments {item.data.num_comments}</p>
              </RedditItemList>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default RedditItem