import React, { useState } from "react";
import Button from "../../Components/UI/Button.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MenuModal from "../../Components/UI/MenuModal.jsx";

const MenuDetail = ({ name, weight, description, image, price }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <Card
            onClick={() => setModalIsOpen(true)}

            className="flex flex-row p-1 max-w-3xl bg-red-500 text-xs">
            <CardMedia
                component="img"
                image={image || "https://via.placeholder.com/150"}
                alt={name}
                style={{ width: '50%' }}
                className=" h-20 object-cover rounded bg-gray-400"
            />

            <CardContent className="flex flex-col justify-between flex-1 ml-2 bg-green-400">
                <div className="flex justify-between items-start">
                    <Typography gutterBottom variant="subtitle1" component="div" className="text-sm font-bold">
                        {name}
                    </Typography>
                    <Button className="px-1 py-0.5 text-xs" text={price} />
                </div>

                <Typography variant="body2" className="text-gray-600 mt-1 bg-yellow-400 text-xs">
                    {description}
                </Typography>
            </CardContent>

            {
                modalIsOpen && <MenuModal
                    close={(e) => {
                        e.stopPropagation()
                        setModalIsOpen(false)
                    }}
                    desc={description}
                    name={name}
                    price={price} />
            }
        </Card>
    );
};

export default MenuDetail;