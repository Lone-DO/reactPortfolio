import React from "react";

const List = props => {
  const { Original, NewLeaf, CityFolk } = props.audioData;
  console.log(Original);
  console.log(NewLeaf);
  console.log(CityFolk);

  const Sort = obj => {
    return Object.keys(obj).map(playlist => {
      if (
        playlist === "Normal" ||
        playlist === "Raining" ||
        playlist === "Winter" ||
        playlist === "City"
      ) {
        const songs = Array.from(obj[playlist]);
        console.log(songs);
        // songs.map(song => {
        //   console.log(song);
        // });

        return (
          <li>
            <div>{playlist}</div>
          </li>
        );
      } else {
        return null;
      }
    });
  };
  const OriginalList = Sort(Original);
  const NewLeafList = Sort(NewLeaf);
  const CityFolkList = Sort(CityFolk);
  return (
    <ol>
      <li>List of Music</li>
      <h3>Animal Crossing</h3>
      {OriginalList}
      <h3>Animal Crossing: New Leaf</h3>
      {NewLeafList}
      <h3>Animal Crossing: City Folk</h3>
      {CityFolkList}
    </ol>
  );
};

export default List;
