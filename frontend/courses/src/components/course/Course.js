import React from "react";
import{ Card,CardBody,CardSubtitle,CardText,Button, Container}from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../Api/Bootapi";



const Courses=({course,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/dishes/${id}`).then(
            (response)=>{
                toast.success("item is deleted");
                update(id);
            },(error)=>{
                toast.error("item not deleted!! server problem");
            }
        )
    }
    
    return(
        
        <Card className="text-center" color="warning" >
            {/* <CardImg top width="100%"src="C:\Users\hp\Desktop\Food Mania\Food Mania\frontend\courses\src\images\OIP1.jpg"/> */}
            <CardBody>
                <table>
                    <thead>
                        <th>Dish</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course.title}</td>
                            <td>{course.price}</td>
                            <td>{course.quantity}</td>
                            <td>{course.total}</td>
                        </tr>
                    </tbody>
                {/* <CardSubtitle className="font-weight-bold">Dish: {course.title}</CardSubtitle>
                <CardText>Price: Rs {course.price}/-</CardText>
                <CardText>Quantity: {course.quantity}</CardText>
                <CardText>Total: Rs {course.total}/-</CardText> */}
                </table>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                </Container>   
            </CardBody>
        </Card>
        
    )
}

// CardImg.propTypes={
//     tag:PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
//     className:PropTypes.string,
//     top:PropTypes.bool,
//     bottom:PropTypes.bool
// };

// CardImgOverlay.propTypes={
//     tag:PropTypes.oneTypes([PropTypes.func, PropTypes.string]),
//     className:PropTypes.String
// };

export default Courses;