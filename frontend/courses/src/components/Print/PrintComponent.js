import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Allcourses from "../Allcourse/Allcourses";

// export default function PrintComponent() {
//   let componentRef = useRef();

//   return (
//     <>
//       <div>
//         {/* button to trigger printing of target component */}
//         <ReactToPrint
//           trigger={() => <Button>Print this out!</Button>}
//           content={() => componentRef}
//         />

//         {/* component to be printed */}
//         <Allcourses ref={(el) => (componentRef = el)} />
//       </div>
//     </>
//   );
// }

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Allcourses ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;