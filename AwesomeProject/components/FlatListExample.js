import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text numberOfLines={1} style={styles.title}>
      {title}
    </Text>
  </View>
);

export const FlatListExample = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(res => setPosts(res))
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator size="large" />}

      {!loading && <Text>{posts.length} adet kayıt bulundu</Text>}
      {!loading && posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export const ScrollviewExample = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          And I know you're saying, 'Oh Bob, you've done it this time.' And you
          may be right. You are only limited by your imagination. And maybe a
          little bush lives there. This is the time to get out all your
          flustrations, much better than kicking the dog around the house or
          taking it out on your spouse. Isn't that fantastic that you can make
          whole mountains in minutes? Let's make some happy little clouds in our
          world. Follow the lay of the land. It's most important. You have to
          make almighty decisions when you're the creator. Decide where your
          cloud lives. Maybe he lives right in here. These things happen
          automatically. All you have to do is just let them happen. There is
          immense joy in just watching - watching all the little creatures in
          nature. How to paint. That's easy. What to paint. That's much harder.
          I started painting as a hobby when I was little. I didn't know I had
          any talent. I believe talent is just a pursued interest. Anybody can
          do what I do. Be brave. Just think about these things in your mind -
          then bring them into your world. Talent is a pursued interest. That is
          to say, anything you practice you can do. There he comes. Tree trunks
          grow however makes them happy. Volunteering your time; it pays you and
          your whole community fantastic dividends. This is probably the
          greatest thing to happen in my life - to be able to share this with
          you. It just happens - whether or not you worried about it or tried to
          plan it. Don't be bashful drop me a line. Get tough with it, get
          strong. Isn't that fantastic? Everyone wants to enjoy the good parts -
          but you have to build the framework first. Steve wants reflections, so
          let's give him reflections. I'm sort of a softy, I couldn't shoot
          Bambi except with a camera. Work that paint. We'll do another happy
          little painting. It's a very cold picture, I may have to go get my
          coat. It’s about to freeze me to death. There isn't a rule. You just
          practice and find out which way works best for you. Anytime you learn
          something your time and energy are not wasted. Nice little clouds
          playing around in the sky. We don't really know where this goes - and
          I'm not sure we really care. Fluff it up a little and hypnotize it.
          Remember how free clouds are. They just lay around in the sky all day
          long. Each highlight must have it's own private shadow. All you have
          to learn here is how to have fun. If we're gonna walk though the
          woods, we need a little path. Now we don't want him to get lonely, so
          we'll give him a little friend. Be so very light. Be a gentle whisper.
          Let's make a nice big leafy tree. We need dark in order to show light.
          Let's put a touch more of the magic here. Just take out whatever you
          don't want. It'll change your entire perspective. And I know you're
          saying, 'Oh Bob, you've done it this time.' And you may be right. You
          are only limited by your imagination. And maybe a little bush lives
          there. This is the time to get out all your flustrations, much better
          than kicking the dog around the house or taking it out on your spouse.
          Isn't that fantastic that you can make whole mountains in minutes?
          Let's make some happy little clouds in our world. Follow the lay of
          the land. It's most important. You have to make almighty decisions
          when you're the creator. Decide where your cloud lives. Maybe he lives
          right in here. These things happen automatically. All you have to do
          is just let them happen. There is immense joy in just watching -
          watching all the little creatures in nature. How to paint. That's
          easy. What to paint. That's much harder. I started painting as a hobby
          when I was little. I didn't know I had any talent. I believe talent is
          just a pursued interest. Anybody can do what I do. Be brave. Just
          think about these things in your mind - then bring them into your
          world. Talent is a pursued interest. That is to say, anything you
          practice you can do. There he comes. Tree trunks grow however makes
          them happy. Volunteering your time; it pays you and your whole
          community fantastic dividends. This is probably the greatest thing to
          happen in my life - to be able to share this with you. It just happens
          - whether or not you worried about it or tried to plan it. Don't be
          bashful drop me a line. Get tough with it, get strong. Isn't that
          fantastic? Everyone wants to enjoy the good parts - but you have to
          build the framework first. Steve wants reflections, so let's give him
          reflections. I'm sort of a softy, I couldn't shoot Bambi except with a
          camera. Work that paint. We'll do another happy little painting. It's
          a very cold picture, I may have to go get my coat. It’s about to
          freeze me to death. There isn't a rule. You just practice and find out
          which way works best for you. Anytime you learn something your time
          and energy are not wasted. Nice little clouds playing around in the
          sky. We don't really know where this goes - and I'm not sure we really
          care. Fluff it up a little and hypnotize it. Remember how free clouds
          are. They just lay around in the sky all day long. Each highlight must
          have it's own private shadow. All you have to learn here is how to
          have fun. If we're gonna walk though the woods, we need a little path.
          Now we don't want him to get lonely, so we'll give him a little
          friend. Be so very light. Be a gentle whisper. Let's make a nice big
          leafy tree. We need dark in order to show light. Let's put a touch
          more of the magic here. Just take out whatever you don't want. It'll
          change your entire perspective.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
