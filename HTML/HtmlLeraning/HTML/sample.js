const response = await openai.createImageEdit(
    fs.createReadStream("sunlit_lounge.png"),
    fs.createReadStream("mask.png"),
    "A sunlit indoor lounge area with a pool containing a flamingo",
    1,
    "1024x1024"
  );
  image_url = response.data.data[0].url;