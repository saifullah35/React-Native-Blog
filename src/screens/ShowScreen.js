import React, { useContext} from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state }  = useContext(Context);

    //Search through all the blog posts and find the appropriate one
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPosts.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;