// import { URL } from 'url';
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [img, setimg] = useState("");
  const [textValue, setTextValue] = useState("");

  async function query(Data) {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        inputs: Data,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
        },
        responseType: "blob",
      }
    );
    console.log(response.data);
    const imgurl = URL.createObjectURL(response.data);
    setimg(imgurl);
  }

  return (
    <>
        <section className="w-[1280px] mx-auto "> 
            <div className="text-center my-12 ">
                <input
                    type="text"
                    className="border-2 py-2 px-4 mr-4"
                    onChange={(e) => setTextValue(e.target.value)}
                    />

                <button className="bg-blue-400 py-2 px-6 rounded text-xl " onClick={() => query(textValue)}>Search results;</button>

                {img && <img src={img} alt="Image from Blob" />}
            </div>
        </section>
    </>
  );
};

export default ShowData;
