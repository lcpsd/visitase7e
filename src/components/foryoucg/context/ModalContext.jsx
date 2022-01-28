import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export function ModalContextProvider({children}){

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isPhoneModalVisible, setIsPhoneModalVisible] = useState(false)
    const [isLocationModalVisible, setIsLocationModalVisible] = useState(false)
    const [modalData, setModalData] = useState([])

    return(
        <ModalContext.Provider value={{
            isModalVisible,
            setIsModalVisible,
            modalData,
            setModalData,
            isPhoneModalVisible,
            setIsPhoneModalVisible,
            isLocationModalVisible,
            setIsLocationModalVisible
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext(){
    return useContext(ModalContext)
}