import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import './style.css';
export default function Home(props) {
    
    return (
        <Layout sidebar>
            

            {/* <Jumbotron style={ { margin:'5rem' , background : '#fff'} }  className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a sear</p>
            </Jumbotron> */}
        </Layout>
    )
}
