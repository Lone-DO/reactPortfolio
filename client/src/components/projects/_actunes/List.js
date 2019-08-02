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
  // eslint-disable-next-line
  const OriginalList = Sort(Original);
  // eslint-disable-next-line
  const NewLeafList = Sort(NewLeaf);
  // eslint-disable-next-line
  const CityFolkList = Sort(CityFolk);
  return (
    <ol>
      <li>NOTICE: COMPONENT IN CONSTRUCTION</li>
      <i>Will display all songs, with ability to download</i>
      <li>List of Music</li>
      <h3>Animal Crossing</h3>
      {/* {OriginalList} */}
      <h3>Animal Crossing: New Leaf</h3>
      {/* {NewLeafList} */}
      <h3>Animal Crossing: City Folk</h3>
      {/* {CityFolkList} */}
    </ol>
  );
};

export default List;
