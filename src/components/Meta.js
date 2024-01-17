import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
    <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title}</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
</HelmetProvider>
    )
}

export default Meta