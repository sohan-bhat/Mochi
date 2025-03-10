import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress, Dialog, DialogContent, DialogTitle, MenuItem, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ArrowDropDown, Delete } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { getGroqChatCompletion } from '../../tools/aiTools';
import Markdown from 'react-markdown'

const IngredientsList = () => {
    const [alignment, setAlignment] = React.useState();
    const [clickState, setClickState] = React.useState([])
    const [inputState, setInputState] = React.useState([])
    const [mealType, setMealType] = React.useState([])
    const [responseState, setResponseState] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const bottomOfPanelRef = React.useRef(null)

    // LIST OF INGREDIENTS
    const pantryEssentials = ["all-purpose flour", "baking powder", "baking soda", "butter", "cocoa powder", "cornstarch", "eggs", "Flour", "heavy cream", "honey", "milk", "brown sugar", "granulated sugar", "powdered sugar", "vanilla extract", "yeast"]
    const vegetablesAndGreens = ["artichoke", "asparagus", "bell pepper", "broccoli", "brussels sprouts", "cabbage", "carrot", "cauliflower", "celery", "cucumber", "garlic", "green beans", "jalapeno", "kale", "lettuce", "mushrooms", "onion", "potato", "shallot", "spinach", "tomato"]
    const fruits = ["apple", "apricot", "banana", "blackberry", "blueberry", "cantaloupe", "cherry", "coconut", "cranberry", "durian", "grapes", "grapefruit", "guava", "honeydew", "kiwi", "lemon", "lime", "mango", "orange", "papaya", "peach", "plum", "raspberry", "watermelon"]
    const nutsAndSeeds = ["almonds", "brazil nuts", "cashews", "chestnuts", "chia seeds", "coconut", "flaxseeds", "hazelnuts", "hemp seeds", "macadamia nuts", "mustard seeds", "peanuts", "pecans", "pine nuts", "pistachios", "poppy seeds", "pumpkin seeds", "quinoa", "sesame seeds", "sunflower seeds", "walnuts"]
    const meats = ["beef", "bison", "buffalo", "chicken", "duck", "emu", "goose", "lamb", "mutton", "pheasant", "pork", "turkey", "veal", "venison"]
    const fishAndSeafood = ["anchovies", "barracuda", "bass", "catfish", "caviar", "cod", "crab", "crawfish", "cuttlefish", "eel", "lobster", "octopus", "oyster", "prawns", "scallops", "shark", "shrimp", "snails", "squid", "swordfish", "trout", "whitefish", "yellowtail"]
    const herbsAndSpices = ["basil", "cardamom", "cinnamon", "cumin", "dill", "garlic powder", "ginger", "mint", "nutmeg", "oregano", "onion powder", "paprika", "parsley", "red pepper", "rosemary", "sage", "turmeric", "thyme"]
    const dairyAndEggs = ["butter", "butter milk", "cheese", "cream", "sour cream", "whipped cream", "ice cream", "eggs", "ghee", "milk", "plain yogurt", "whey"]
    const grainsAndCarbs = ["barley", "corn", "black beans", "kidney beans", "lentils", "millet", "oats", "pasta", "quinoa", "white rice", "brown rice", "corn tortilla", "flour tortilla", "mesa tortilla", "wheat"]
    const condimentsAndSauces = ["Barbecue Sauce", "Chutney", "Fish Sauce", "Hot Sauce", "Hummus", "Italian Dressing", "Ketchup", "Mayonnaise", "Mustard", "Olive Oil", "Pesto", "Ranch", "Sesame Oil", "Soy Sauce", "Tahini", "Teriyaki Sauce", "Vinegar", "Worcestershire Sauce"]
    
    // MEAL TYPE
    const mealTypeList = ["Breakfast", "Lunch", "Dinner", "Snack", "Drink"]
    
    // HANDLE EVENTS
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      setClickState(newAlignment)
    };
    
    const handleInputChange = (event) => {
        setInputState(event.target.value)
    }

    const handleClick = () => {
        setResponseState(false)
        if (!loading) {
            setLoading(true)
        }
        
        getGroqChatCompletion(clickState.concat(inputState, mealType)).then((res) => {
            setResponseState(res.choices[0].message.content)
            setLoading(false)
        })
    }

    const handleMealType = (event) => {
        setMealType(event.target.value)
    }

    const handleClear = (event) => {
        setAlignment()
    }

    useEffect(() => {
        if (bottomOfPanelRef.current) {
            bottomOfPanelRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [responseState])

    return (
        <>
        <h2 className='ingredients-slogan'>Select Ingredients, Find Recipes, and Start Cooking Now!</h2>
        <div className='ingredients-container'>
            <div className='pantry-essentials' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/pantry.png')} width={30} height={30} alt='icon'/> Pantry Essentials
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                pantryEssentials.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='vegetables-greens' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/vegetables.png')} width={30} height={30} alt='icon'/> Vegetables & Greens
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                vegetablesAndGreens.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='fruits' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                       <img src={require('../../icons/fruits.png')} width={30} height={30} alt='icon'/> Fruits
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                fruits.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='nuts & seeds' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                       <img src={require('../../icons/nuts.png')} width={30} height={30} alt='icon'/> Nuts & Seeds
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                nutsAndSeeds.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='meats' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/meats.png')} width={30} height={30} alt='icon'/> Meats
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                meats.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='fish-seafood' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/seafood.png')} width={30} height={30} alt='icon'/> Fish & Seafood
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                fishAndSeafood.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='herbs-spices' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/herbs.png')} width={30} height={30} alt='icon'/> Herbs & Spices
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                herbsAndSpices.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='dairy-egg' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/dairy-eggs.png')} width={30} height={30} alt='icon'/> Dairy & Eggs
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                dairyAndEggs.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='grains-carbs' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/grains-carbs.png')} width={30} height={30} alt='icon'/> Grains & Carbs
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                grainsAndCarbs.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='condiments-sauces' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/sauces.png')} width={30} height={30} alt='icon'/> Condiments & Sauces
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            {
                                condimentsAndSauces.map((i) => (
                                    <ToggleButton value={i}>{i}</ToggleButton>
                                ))
                            }
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>
        <div className='clear-all-btn'>
            <Button startIcon={<Delete />} onClick={handleClear} variant='contained' color='error'>Clear</Button>
        </div>
        <div id='outlined-basic'><TextField onChange={handleInputChange} color='success' style={{ width: "350px" }} label="Other Ingredients or Dietary Lifestyles" variant="outlined" size='small'/></div>
        <div className='meal-type'>
            <TextField
                label="Select Meal Type"
                select
                defaultValue={""}
                variant='outlined'
                onChange={handleMealType}
                size='small'
                sx={{width: "250px"}}
            >
                {
                    mealTypeList.map((i) => (
                        <MenuItem value={i}>{i}</MenuItem>
                    ))
                }
            </TextField>
        </div>
        <div className='find-recipes-btn'>
            <Button onClick={handleClick} variant='contained' disabled={loading} color='info'>Find Recipes</Button>
        </div>

        <div className='loading-alert'>
            <Dialog
                open={loading}
                fullWidth
            >
                <DialogTitle>
                    Loading...
                </DialogTitle>
                <DialogContent>
                    <CircularProgress />
                </DialogContent>
            </Dialog>
        </div>

        { responseState ?
            <>
                <div className="response-cover">
                    <p>
                        <Markdown>{responseState}</Markdown>
                    </p>
                </div>
                <div ref={bottomOfPanelRef}></div>
            </>
        : null
        }
        </>
    );
};

export default IngredientsList;