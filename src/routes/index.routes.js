const routes = async (view, model) => {
    try {
        console.log(view);
        mainContainer.innerHTML = await view;
        await model;
    } catch (error) {
        console.log("Error de función async: ", error);
    }
};
export default routes;
