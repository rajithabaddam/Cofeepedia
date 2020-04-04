var text ='Raw,Roasted,Dark Roast,Burnt,Acrid,Smoky,Ashy,Woody,Grain,Malt,Pungent,Spice Brown,Nutmeg,Clove,Cinnamon,Pepper,Anise,Sweet,Honey,Maple Syrup,Molasses,Sweet Aromatics,Overall Sweet,Brown Sugar,Caramelized,Vanilla,Vanillin,Nutty,Hazelnut,Almond,Peanuts,Cocoa,Chocolate,Dark Chocolate,Floral,Rose,Jasmine,Chamomile,Fruity,Dried Fruit,Prune,Raisins,Citrus Fruit,Lemon,Lime,Grapefruit,Orange,Berry,Blackberry,Raspberry,Blueberry,Strawberry,Pomegranate,Grape,Cherry,Stone Fruit,Peach,Pear,Apple,Pineapple,Coconut,Overâ€ripe,Fermented,Sour Aromatics,Olive Oil,Green,Underâ€ripe,Peapod,Herbâ€like,Hayâ€like,Vegetative,Fresh,Dark Green,Beany,Tobacco,Cigar,Pipe,BlackTea,Animalic,Meatyâ€Brothy,Fermentedâ€Winey,Distilledâ€Alcohol,Whiskey,Dusty,Earthy,Moldyâ€Damp,Phenolic,Stale,Papery,Cardboard,Rubber,Petroleum,Medicinal,Skunky,Metallic,Bitter,Sour,Salty,Butyric Acid,Citric Acid,Isovaleric Acid,Malic Acid,Acetic Acid,Overall Impact,Blended,Longevity,Coffee ID (Fullness),Fidelity,Mouth Drying,Viscosity,Oily';
var lines = text.split(/[,\. ]+/g),
  data = Highcharts.reduce(lines, function(arr, word) {
    var obj = Highcharts.find(arr, function(obj) {
      return obj.name === word;
    });
    if (obj) {
      obj.weight += 1;
    } else {
      obj = {
        name: word,
        weight: 1
      };
      arr.push(obj);
    }
    return arr;
  }, []);

Highcharts.chart('container', {
  accessibility: {
    screenReaderSection: {
      beforeChartFormat: '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    }
  },
  series: [{
    type: 'wordcloud',
    data: data,
    name: 'Occurrences'
  }],
  title: {
    text: ' '
  }
});
