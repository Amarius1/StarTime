/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            
            $('.racheta').click(function(e) {        
                e.preventDefault();
                $('#fulscreen img').attr('src',$(this).attr('src'));
                $('#fulscreen').toggleClass('hidden');
                $('#fulscreen').toggleClass('overlay');
                
            });
            $('#fulscreen').click(function(e) {
                
        
                e.preventDefault();
//                $(this).toggleClass('racheta'); 
                $('#fulscreen').toggleClass('hidden');
                $('#fulscreen').toggleClass('overlay');
            });
            
            
$(document).ready(function() {
   
        var imageLinks = $('a[href="racheta.jpg"]');
        if (imageLinks.children('racheta').length) {
            imageLinks.children('racheta').each(function() {
                var currentTitle = $(this).attr('title');
                $(this).attr('title', currentTitle + ' (click to enlarge image)');
            });
            imageLinks.click(function(e) {
                e.preventDefault();
                $(this).children('racheta').toggleClass('expanded');
            });
        }
    });

