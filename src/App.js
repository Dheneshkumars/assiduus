import { useState } from "react";
import PopUpModal from "./Components/baseComponents/PopUp";
import ContentPage from "./Components/groupComponents/ContentPage";
import DashBoard from "./Components/groupComponents/DashBoard";
import Header from "./Components/groupComponents/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadButton from "./Components/baseComponents/UploadButton";
import Tittle from "./Components/baseComponents/Tittle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [openPop, setOpenPop] = useState(false);
    const onCallbackHandler = (e, type) => {
        if (type == 'onClick' && e) {
            setOpenPop(true);
        }
    }
    const ClosePopUp = () => {
        if (openPop) {
            setOpenPop(false);
        }
    }
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (file) => {
        setSelectedFile(file);
    };
    const SaveDocs = ()=>{
        toast.success("Your Document Successfully submit", {
            theme: "colored",
            width: "250px"
          });
          setSelectedFile(null)
        if (openPop) {
            setOpenPop(false);   
        }
    }

    return (
        <div className="app">
            <Header />
            <div className="app_child">
                <DashBoard />
                <ContentPage onClickHandler={onCallbackHandler} />
            </div>
            <PopUpModal isOpen={openPop} onRequestSave={SaveDocs} onRequestClose={ClosePopUp}>
                <UploadButton
                    onFileChange={handleFileChange}
                />
                {
                    selectedFile && (
                        <div className="mb-2">
                            <Tittle tag='h5' title={'File Details:'}></Tittle>
                            <p>Name: {selectedFile.name}</p>
                            <p>Type: {selectedFile.type}</p>
                            <p>Size: {selectedFile.size} bytes</p>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="File Preview"
                                style={{ maxWidth: '100%', maxHeight: '100px' }}
                            />
                        </div>
                    )}
            </PopUpModal>
            <ToastContainer />
        </div>
    );
}

export default App;
