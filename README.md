# Hackathon - CSS Variable Generator Website 

As part of my term 3 Coder Academy boot camp, for Term 3 week 10, we were given the time to do a hackathon. 
I original joined a team to start the project, but after 1 day or so, I came to the acceptance that my personal skill level wasn't good enough. A key take for this was to ensure that I did something and did not go to waste and have a deployed product. So I have decided to use this time to re-do the project we did in week 9 and publish that code. This would give me the chance to study and learn the material better. 

## Routes 

- "/" : homepage
	- CSS generator available here 
- "/generator" - CSS generator page 
	- CSS generator available here 
- "/generator/saved" - view list of saved themes 
	- reads localstorage 


## Contexts 

- Base Colour 
	- hex colour of new theme 
- Localstorage manager for list of CSS themes 
	- Array of Theme Lists
- Localstorage manager for current CSS theme
	- One Theme List 
- List of CSS themes 
	- Array of Theme Lists 
- Current CSS theme 
	- One Theme List 


## Data 

### Colour Object 

```js
{
	hex: "#000000",
	strength: 100,
	rgba: [255, 255, 255, 255]
}
```

### Theme List 

```js
{
	name: "violet eggplant"
	colours: [
		Colour Objects go here 
	]
}
```