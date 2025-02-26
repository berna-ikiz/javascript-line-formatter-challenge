function TextParser(text, wordCount) {
  let result = "";
  const wordsArray = text.split(" ");
  let i = 0;
  while (i <= wordsArray.length) {
    result += wordsArray.slice(i, i + wordCount).join(" ") + "\n";
    i += wordCount;
  }
  console.log(result);
  return result;
}

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed fermentum enim, eget egestas enim. Donec fringilla bibendum placerat. Vivamus in turpis et sapien pulvinar dictum ut vel nisl. Duis in ante tempor elit dapibus consectetur vel id arcu. Donec elementum euismod purus, a gravida lectus lacinia sed. Curabitur molestie, felis ornare luctus viverra, dui lacus ultricies orci, id dignissim sapien odio pretium nisi. Etiam accumsan elementum ligula, eget finibus urna pharetra et. Praesent sit amet ligula vel erat sodales suscipit vitae vitae metus. Aenean accumsan sapien a ipsum elementum, non lobortis est tincidunt. Etiam auctor tellus et pharetra auctor. Vivamus elit diam, sollicitudin quis nunc quis, porta dapibus augue. Pellentesque in placerat tellus. Etiam rhoncus odio tincidunt auctor tincidunt. Nulla facilisi.";

TextParser(text, 5);
