/*
    Assignment 5
    {Palwinder Kaur }
*/

$(document).ready(function () {
  // your code here
  class ContentCard {
    constructor(title, description, categoryType) {
      this.id = Math.floor(Math.random() * 50);
      this.title = title;
      this.description = description;
      this.categoryType = categoryType;
    }

    updateContent(title, description, categoryType) {
      if (title) this.title = title;
      if (description) this.description = description;
      if (categoryType) this.categoryType = categoryType;
    }

    toString() {
        let element = $(document.createElement("div"));
        element.attr("id", String(this.id)).css({"border": "1px solid black", "padding": "10px", "margin": "10px 0px"})
        element.append("<h4>" + this.title + "<h4/>");
        element.append("<p>" + this.description + "</p>");
        element.append("<div>" + this.categoryType + "</div>");

      return element;
    }
  }

  let contentCards = [
    {
      title: "Pikachu",
      description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      category: "Electric",
    },
    {
      title: "Gengar ",
      description: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
      category: "ghost",
    },
    {
      title: "Charmander",
      description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      category: "fire",
    },
    {
      title: "Noctowl ", 
      description:"Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
      category: "flying",
    },
    {
      title: "Ponyta ",
      description: "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.”",
      category: "fire",
    },
  ];

  contentCards.forEach((contentCard) => {
    let content = new ContentCard(
      contentCard.title,
      contentCard.description,
      contentCard.category
    );
    
    $("#content-list").append(content.toString());
  });
});
