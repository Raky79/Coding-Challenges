def spin_words(sentence):
    split_sentence = sentence.split(" ")
    new_words = [] 
    for word in split_sentence:
        if len(word) >= 5:
            new_words.append(word[::-1])
        else: 
            new_words.append(word)
    return ' '.join(new_words)

assert spin_words('Hello my name is Timothy') == 'olleH my name is yhtomiT'  