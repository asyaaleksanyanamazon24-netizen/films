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
            className="flex flex-row p-2 max-w-3xl cursor-pointer hover:shadow-lg transition-shadow duration-300"
            sx={{ display: 'flex', flexDirection: 'row', padding: 1, maxWidth: '100%', backgroundColor: 'white', borderRadius: 2 }}
        >
            <CardMedia
                component="img"
                image={image || "https://via.placeholder.com/150"}
                alt={name}
                sx={{ width: 280, height: 180, objectFit: 'cover', borderRadius: 1 }}
            />

            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px !important' }}>
                <div className="flex justify-between items-start w-full">
                    <Typography gutterBottom variant="h5" component="div" className="font-bold text-gray-800 leading-tight text-2xl">
                        {name}
                    </Typography>
                    <span className="bg-orange-500 text-white text-base px-3 py-1 rounded-full font-bold ml-2 whitespace-nowrap">
                        {price} ֏
                    </span>
                </div>

                <Typography variant="body1" className="text-gray-600 mt-2 line-clamp-3 text-base leading-relaxed">
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
                    price={price}
                    image={image}
                />
            }
        </Card>
    );
};

export default MenuDetail;