function toggleRecommendationInputVisibility() {
    let recommendation_checkbox = document.getElementById('recommendation-checkbox');
    let recommendation_elements = document.getElementsByClassName('recommendation');

    if (recommendation_checkbox.checked) {
        recommendation_elements[0].classList.remove('hidden-element');
        recommendation_elements[1].classList.remove('hidden-element');
    } else {
        recommendation_elements[0].classList.add('hidden-element');
        recommendation_elements[1].classList.add('hidden-element');
        recommendation_elements[1].value = '';
    }
}

function presentationTextAreaLength() {
    let presentation_text_area = document.getElementById('presentation');
    let presentation_text_area_char_count = document.getElementById('presentation-text-area-char-count');

    presentation_text_area_char_count.innerText = presentation_text_area.value.length + '/500';
}
