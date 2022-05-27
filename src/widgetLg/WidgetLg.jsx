import "./widgetLg.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

export default function WidgetLg() {
  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
  });
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Add a new service</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName"><label>Name:</label></span>
          </td>
          <td className="widgetLgDate">
            <div className="inputt">
            <input type="text" placeholder="Enter your name" required/>
            </div>
            </td>
          <td className="widgetLgAmount"></td>
          {/* <td className="widgetLgStatus">
            <Button type="Declined" />
          </td> */}
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName"><label>picture:</label></span>
          </td>
          <td className="widgetLgDate">
            <UploadButton uploader={uploader}
             options={{multi: false}}
             onComplete={()=>window.alert("Image uploaded successfully")}>
             {({onClick}) =>
             <div className="upload">
             <button onClick={onClick}>
             Upload an image...
            </button></div>  
              }
           </UploadButton>
            </td>
          {/* <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td> */}
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgStatus">
            <Button type="Add" />
          </td>
          <td className="widgetLgDate"></td>
          <td className="widgetLgAmount"></td>
        </tr>
      </table>
    </div>
  );
}
