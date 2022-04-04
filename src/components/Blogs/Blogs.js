import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qna-area'>
            <div className='qus-1'>
                <h4>what is context api?</h4>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    <br />
                    <br />
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. 
                </p>
            </div>
            <div className="qus-1">
                <h4>what is semantic tag?</h4>
                <p>Ans:  Semantic tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the <code>code</code> tag is immediately recognized by the browser as some type of coding language and than using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
                </p>
            </div>
        </div>
    );
};

export default Blogs;